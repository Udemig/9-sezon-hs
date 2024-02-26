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
      count: 3,
    };
  }

  // render methpdu ile ekrana basılcak olan arayüzü belirle
  render() {
    return (
      <div className="d-flex justify-content-center my-5">
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <h1>SAYFA {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default Pagination;
