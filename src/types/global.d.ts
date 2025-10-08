declare global {
  interface Window {
    AOS?: {
      refresh: () => void;
      init: (options?: any) => void;
    };
  }
}

export {};