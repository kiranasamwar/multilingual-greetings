import {Component} from 'react'

import ButtonTabs from './ButtonTabs'

import Greetings from './Greetings'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  clickTabItem = value => {
    this.setState({
      activeTab: value,
    })
  }

  getFilterItems = () => {
    const {activeTab} = this.state
    const filterItems = languageGreetingsList.filter(
      eachDetail => eachDetail.id === activeTab,
    )
    return filterItems
  }

  render() {
    const {activeTab} = this.state

    const filterItems = this.getFilterItems()

    return (
      <div className="mainContainer">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unOrderList">
          {languageGreetingsList.map(eachItem => (
            <ButtonTabs
              clickTabItem={this.clickTabItem}
              key={eachItem.id}
              tabDetails={eachItem}
              isActive={activeTab === activeTab.id}
            />
          ))}
        </ul>

        {filterItems.map(eachItem => (
          <Greetings key={eachItem.id} languageDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
