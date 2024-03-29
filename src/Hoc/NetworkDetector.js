import React, { Component } from 'react';
import swal from 'sweetalert';
import './NetworkDetector.css';

// eslint-disable-next-line
export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
      const { isDisconnected } = this.state;
      
        if (isDisconnected) {
            swal({
                title: "Internet Connection Lost",
                text: "Please refresh the page after your network has improved",
                icon: "warning",
                dangerMode: true,
            })
            // .then(willDelete => {
            //     if (willDelete) {
            //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
            //     }
            // });
        }

      return (
        <div>
          { isDisconnected && (<div className="internet-error">
              <p>Internet connection lost</p>
            </div>)
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}