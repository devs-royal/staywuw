module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 'postcss-nesting': {},
    // eslint-disable-next-line no-undef
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
