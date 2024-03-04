import React from 'react';

// Normal bir class bir component işlevlerini yerine getiremez
// Bir class'ın component (bileşen) olmasını istiyorsak React'ın
// içerisindeki Compoenent class'ını miras alırız
class Pagination extends React.Component {
  // kurucu method
  // Bu ibleşene gönderilen proplara erişeibliyoruz
  constructor(props) {
    super(props);

    // class component'larda state kullanımı
    this.state = {
      isDarkMode: true,
      count: 3,
    };
  }

  //! class componentlarda yaşam döngüsü

  //* 1) bileşenin ekrana basılma anı
  componentDidMount() {
    console.log('componentDidMount çalıştı');
  }

  //* 2) bileşenin ekrnadan gitme anını izleme
  componentWillUnmount() {
    console.log('componentWillUnmount çalıştı');
  }

  //* 3) bileşenin güncellenme anını izleme
  componentDidUpdate() {
    console.log('componentDidUpdate çalıştı');
  }

  // render methpdu ile ekrana basılcak olan arayüzü belirle
  render() {
    return (
      <div className="d-flex justify-content-center my-5">
        <button
          className="btn btn-secondary"
          disabled={this.state.count === 1}
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count - 1 })
          }
        >
          -
        </button>
        <h1>SAYFA {this.state.count}</h1>
        <button
          className="btn btn-success"
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count + 1 })
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default Pagination;
