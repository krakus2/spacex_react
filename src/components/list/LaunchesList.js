import React, { Component } from 'react';
import ListHeader from './ListHeader';
import ListContainer from './ListContainer.js'
import Footer from '../Footer'
import '../../styles/list/LaunchesList.css'
import Message from './Message'
import { HashLoader } from 'react-spinners';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';


@inject('SpaceXStore')
@observer
class LaunchesList extends Component {
  render() {
    const { errors, loading, starts } = this.props.SpaceXStore
    return (
      <div className="listView">
        <ListHeader sieve={this.sieve} /*data={rockets}*/ />
        {
          !!starts.length  && //!! to konwersja do boolean
          <ListContainer
             />
        }
        {loading &&
          <div className="list__loading">
            <HashLoader
              color={'#a7a9ac'}
              loading={loading}
              size={75}
            />
          </div>
        }
        {
          (!!!starts.length && !Object.keys(errors).length && !loading) && <Message text={"Sorry, no launches found"} />
        }
        {
          !!Object.keys(errors).length && <Message text={errors.text} />
        }

        <Footer />
        <DevTools />
      </div>
    );
  }
}

export default LaunchesList
