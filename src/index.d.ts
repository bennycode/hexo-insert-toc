interface HexoInsertTocConfig {
  maxdepth?: number;
}

declare module hexo {
  const config: {
    'hexo-insert-toc': HexoInsertTocConfig;
  };
  const extend: {
    filter: {
      register: (name: string, action: (data: {content: string}) => void) => void;
    };
  };
}

// Shorthand ambient module declaration:
declare module 'markdown-toc';
