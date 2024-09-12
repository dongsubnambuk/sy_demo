import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; SY-DEMO</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    bottom: 0,
  },
};

export default Footer;
