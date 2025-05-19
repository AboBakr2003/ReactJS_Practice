export const headerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 8%',
  backgroundColor: '#23272f',
  color: '#fff',
  fontWeight: 500,
  letterSpacing: '1px',
  logo: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '10px',
    alignItems: 'center',
    version: {
      fontSize: '13px',
      opacity: 0.6,
      span: {
        fontSize: '12px',
      },
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '10px',
    flexGrow: '1',
    justifyContent: 'center',
    a: {
      fontSize: '14px',
      padding: '10px 30px',
      borderRadius: '30px',
      display: 'inline-block',
      transition: '0.3s',
      cursor: 'pointer',
      notLastChild: {
        marginRight: '10px',
      },
      active: {
        backgroundColor: '#283542',
        color: '#56bfd6',
      },
      hover: {
        backgroundColor: '#333a45',
      },
    },
  },
};
