import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyle = createGlobalStyle `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1597199696880'); /* IE9 */
    src: url('./iconfont.eot?t=1597199696880#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAO8AAsAAAAAB+AAAANuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDKIMAATYCJAMQCwoABCAFhG0HOhvkBhHVmxHJfiRkZxrXDGssiqaK9tE4Ezzgb+kLCR2FivvcjJu6fJnbbc71wEZFqJF8ix59Idk4vTR9CAAf/nJ8DUtgPqAcx5o0tv3TBgYYbw1o7CUSF0hA3mNsoN3PegjAJII0RJlyVepgoDC6CUB06di+JUbKjKqhCwwELiVjlRDT0DG08dpZZkz1vy/eUAkDNHSJsVGNdmXbUOK5eF5D2k6bJtLGHs8JcJNAAmmAAtGh1N0KGcbSkJhKY0U+wMBAg7Gq8j2v4XQS6V7Uhqmm7x9PA+GCQboBkAfjEp4LWxxr8qGKvKYGEmgAL2SMAbgCg4FdGJww7q7QkIbhbwW4BerunmY9tzpmZ6thozkR5qKgBi0PWhPBFOYxc8J54ahf3+HfqUjdXeuw11sTTwox2L5aou76Qykb6tU7dNW8fr3ejRv1r11rdfVqHVdZN37/69cH1zsyoUibdWEN7MX+6y2r9d7U9kdjVxTr06Jx+7b167SrP3eif93Zs/1n+R1rV/5SUplLbT2c9nS9U7HqdbVSrToWu6H+FOvd53SBTKGXzOieXK+je1OrcolCT5vV73Mm2P9PSPyn+AiyH50rk97ffvG8onxzr0njju1/DUgvs0CeOysXmMZz55w68uy59nMd2ubNGoQdmzc5JDo3bZLePps2U/Rz6x8/S7Uudff2rNpFGgfcvn8wxaNhkfhK6TlyQ+7w8s2KFGnctHF0xNCRJcq6S5co0T9o7fefuSvJgH70AMDplMekzzsoT8lCCVspaf/D33D+/vI8zT2LfDMsBcCdhv1qoLSdhh8haS35YylKB1CKlxkWpWSJrdHbB1Bk3XQvDTAxASf6fbg/htZfIUFg4B9DIxfhkBjEUYqdBh2LPHDBoDhMUik/2cKXXkiEcgVSGA0QeLEVGh4chcSLc5Ri34NOAO/ggpeQMKknfOe0SBBsezgJGkUP9g+t44ksmx4C+h3rNBhJynzuGyW2QSizIpu84YQyxoD4qStVAhIe4Qqb4TAwBOEOnWaNajjmOZW9KHM8zg6cBI2iB/uH1vFEbn495D5/xzoNRmqyKqJvlNjWDmVWtKBu6qlV1rVcEj91pUpAwiNcwYmDGWMI5a06dJo1PSLhmJNc1Fadza8dn3ABYGIsr4QmpFBCZ1HSbCKnmHhh29kMAAA=') format('woff2'),
    url('./iconfont.woff?t=1597199696880') format('woff'),
    url('./iconfont.ttf?t=1597199696880') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1597199696880#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
