declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      reset: () => void;
      render: (container: string, options: { sitekey: string; theme?: string; size?: string }) => number;
    };
  }
}

export {};
