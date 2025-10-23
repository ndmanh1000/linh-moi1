import React, { useState, useRef, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import Badge from '../ui/badge/Badge';
import { HiDotsVertical } from 'react-icons/hi';

// Types
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableAction<T> {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: T) => void;
  className?: string;
  variant?: 'default' | 'danger';
}

export interface StatusConfig {
  [key: string]: {
    text: string;
    color: 'success' | 'warning' | 'error' | 'info';
    bgColor?: string;
    textColor?: string;
  };
}

export interface DataTableProps<T extends { id: string | number }> {
  data: T[];
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  statusConfig?: StatusConfig;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  className?: string;
  maxHeight?: string;
  stickyHeader?: boolean;
  showActions?: boolean;
}

interface Position {
  top: number;
  left: number;
}

export default function DataTable<T extends { id: string | number }>({
  data,
  columns,
  actions = [],
  statusConfig = {},
  selectable = false,
  onRowClick,
  onSelectionChange,
  className = '',
  maxHeight = 'max-h-96',
  stickyHeader = false,
  showActions = false,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<string | number | null>(null);
  const [menuPosition, setMenuPosition] = useState<Position | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle select all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows([...data]);
      setAllSelected(true);
      onSelectionChange?.(data);
    } else {
      setSelectedRows([]);
      setAllSelected(false);
      onSelectionChange?.([]);
    }
  };

  // Handle select row
  const handleSelectRow = (row: T) => {
    const isSelected = selectedRows.some((selected) => selected.id === row.id);
    let newSelectedRows: T[];

    if (isSelected) {
      newSelectedRows = selectedRows.filter((selected) => selected.id !== row.id);
    } else {
      newSelectedRows = [...selectedRows, row];
    }

    setSelectedRows(newSelectedRows);
    setAllSelected(newSelectedRows.length === data.length);
    onSelectionChange?.(newSelectedRows);
  };

  // Handle row click
  const handleRowClick = (row: T) => {
    if (selectable) {
      handleSelectRow(row);
    }
    onRowClick?.(row);
  };

  // Handle actions menu
  const toggleMenu = (event: React.MouseEvent, rowId: T['id']) => {
    event.stopPropagation();
    if (openMenu === rowId) {
      setOpenMenu(null);
      setMenuPosition(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.pageYOffset,
        left: rect.left + window.pageXOffset,
      });
      setOpenMenu(rowId);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setMenuPosition(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render status badge
  const renderStatusBadge = (value: string, statusKey?: string) => {
    const key = statusKey || value;
    const config = statusConfig[key];

    if (config) {
      if (config.bgColor && config.textColor) {
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}
          >
            {config.text}
          </span>
        );
      }
      return (
        <Badge size="sm" color={config.color}>
          {config.text}
        </Badge>
      );
    }

    return <span>{value}</span>;
  };

  // Render cell content
  const renderCellContent = (column: TableColumn<T>, row: T) => {
    const value = row[column.key];
    if (column.render) return column.render(value, row);
    if (statusConfig[value as unknown as string] || statusConfig[column.key as string]) {
      return renderStatusBadge(value as unknown as string, column.key as string);
    }
    return value as React.ReactNode;
  };

  return (
    <div className={`bg-white rounded-lg shadow overflow-hidden ${className}`}>
      <div className={`overflow-x-auto ${maxHeight} overflow-y-auto`}>
        <Table>
          <TableHeader
            className={`border-b border-gray-100 dark:border-white/[0.05] ${
              stickyHeader ? 'sticky top-0 z-10 bg-gray-50' : ''
            }`}
          >
            <TableRow>
              {selectable && (
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 focus:ring-blue-500"
                    checked={allSelected}
                    onChange={handleSelectAll}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={String(column.key)}
                  isHeader
                  className={`px-5 py-3 font-medium text-gray-500 text-${
                    column.align || 'start'
                  } text-theme-xs dark:text-gray-400 ${column.width ? `w-${column.width}` : ''}`}
                >
                  {column.label}
                </TableCell>
              ))}
              {showActions && actions.length > 0 && (
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {data.map((row) => {
              const isSelected = selectedRows.some((selected) => selected.id === row.id);
              return (
                <TableRow
                  key={row.id}
                  className={`hover:bg-gray-50 cursor-pointer ${isSelected ? 'bg-blue-50' : ''}`}
                >
                  {selectable && (
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={isSelected}
                        onChange={() => handleSelectRow(row)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                  )}
                  {columns.map((column) => (
                    <TableCell
                      key={String(column.key)}
                      className={`px-4 py-3 text-gray-500 text-${
                        column.align || 'start'
                      } text-theme-sm dark:text-gray-400`}
                    >
                      <div onClick={() => handleRowClick(row)}>
                        {renderCellContent(column, row)}
                      </div>
                    </TableCell>
                  ))}
                  {showActions && actions.length > 0 && (
                    <TableCell className="px-4 py-3 text-center">
                      <button
                        onClick={(e) => toggleMenu(e, row.id)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        <HiDotsVertical className="h-5 w-5" />
                      </button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Actions Dropdown Menu */}
      {openMenu !== null && menuPosition && (
        <div
          ref={menuRef}
          className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px]"
          style={{
            top: menuPosition.top,
            left: menuPosition.left,
          }}
        >
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                const row = data.find((r) => r.id === openMenu);
                if (row) action.onClick(row);
                setOpenMenu(null);
                setMenuPosition(null);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 ${
                action.variant === 'danger' ? 'text-red-600' : 'text-gray-700'
              } ${action.className || ''}`}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
