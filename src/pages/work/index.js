import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Masonry } from 'src/components/Masonry'
import Bio from 'src/components/Bio'
import LayoutWithHeader from 'src/components/LayoutWithHeader'
import { rhythm } from 'src/utils/typography'


const IMAGE_HEIGHT = 200
const TITLE_HEIGHT = 200
const FOOTER_HEIGHT = 200

class MyMasonryItem extends React.Component {
  static getColumnSpanFromProps = ({ isFeatured }, getState) => {
    if (isFeatured) {
      return 2;
    }
    return 1;
  }
  static getHeightFromProps = (getState, props, columnSpan, columnGutter) => {
    return IMAGE_HEIGHT + TITLE_HEIGHT + FOOTER_HEIGHT;
  }

  render() {
    console.log(this.props)
    return null
    // return this.props.name
  }
}

const myArrayOfItems = [{ name: 'Hello' }, { name: 'World' }]





class Work extends React.PureComponent {

  state = {
    items: myArrayOfItems,
    hasMore: false,
    isLoading: false,
  }

  // componentDidMount() {
  //   this.fetch()
  // }

  fetch () {
  //   // update isLoading flag appropriately
  //   const additionalData = getMoreData()
  //   this.setState((prevState) => ({
  //     items: prevState.items.concat(additionalData.items),
  //     hasMore: additionalData.hasMore,
  //   }))
  }

  getState = () => this.state


  render () {
    return (
      <LayoutWithHeader cssClass="work">
        <div className='container'>
          <h1>Client Work</h1>

          <Masonry
            items={this.state.items}
            itemComponent={(props) => (<MyMasonryItem />)}
            alignCenter={true}
            containerClassName="masonry"
            layoutClassName="masonry-view"
            pageClassName="masonry-page"
            loadingElement={<span>Loading...</span>}
            columnWidth={20}
            numColumns={3}
            columnGutter={30}
            hasMore={this.state.hasMore}
            isLoading={false}
            onInfiniteLoad={this.fetch}
            getState={this.getState}
          />

          <div>
            <h2>The Token Registry<small><a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>open</a></small></h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design for an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>.  After completing the smart contracts we decided to build a proof-of-concept around the idea of a token registry.  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens.
            </p>
          </div>

          <div>
            <h2>OpenCare<small><a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>open</a></small></h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to develop their first decentralized application for the global healthcare market.  OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists.  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
            </p>
            <p>
              OpenCare uses a broad spectrum of decentralized technologies: including IPFS, Whisper and Ethereum.
            </p>
          </div>
        </div>
      </LayoutWithHeader>
    )
  }
}

export default Work
