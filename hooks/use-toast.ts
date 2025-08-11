
'use client';

import * as React from 'react';

type ToastMessage = {
  id: number;
  title: string;
  description?: string;
};

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    setToasts((prev) => [...prev, { id: Date.now(), ...toast }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}
