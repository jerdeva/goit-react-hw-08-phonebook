const styles = {
  container: {
    minHeight: 'calc(80vh - 20px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#A4C2FF',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your Phonebook! <br/>Log in to your account or create a new one {' '}
        <span role="img" aria-label="Greeting icon">
          👨‍👩‍👧‍👦
        </span>
      </h1>
    </div>
  );
}