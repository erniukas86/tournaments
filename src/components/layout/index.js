import styles from './styles.module.css';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout ({ children }) {
  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
