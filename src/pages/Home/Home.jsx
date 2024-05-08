import  phoneBook from '../../img/telephone.jpeg';


const styles = {
  container: {
    minHeight: 'calc(80vh - 20px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop:'20px',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#a01313',
  },
  image: {
    marginTop:'20px',
    width: '608px',
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={phoneBook} alt="phonebook" />
      <h1 style={styles.title}>
        Welcome to your Phonebook! <br/>Log in to your account or create a new one {' '}
        <span role="img" aria-label="Greeting icon">
          👨‍👩‍👧‍👦
        </span>
      </h1>
    </div>
  );
}