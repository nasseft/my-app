import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A short bio about John Doe',
        imgSrc: 'https://media.cheggcdn.com/media/929/92999b94-0eaf-4997-8535-84ee7472e330/phpHts2qM',
        profession: 'Web Developer',
      },
      shows: false,
      mountedTime: null,
    };
  }

  componentDidMount() {
    this.setState({ mountedTime: new Date().toLocaleTimeString() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Component mounted at: {mountedTime}</p>
      </div>
    );
  }
}

export default App;
