import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

const topics = [
  {
    name: 'Veggie Ipsum',
    id: 'veggie-ipsum',
    description: 'High in fiber and good for your heart, Veggie Ipsum delivers the most organic, hand-picked, lorem ipsum placeholder text right to your door (or browser... I guess).',
    resources: [
      {
        name: 'Pommy Ipsum',
        id: 'pommy-ipsum',
        description: "Aching for a bit of Brit slang in your designs? Drop in some lorem ipsum from the official text generator of the British Empire, and channel Monty Python."
      },
      {
        name: 'Hairy Ipsum',
        id: 'hairy-ipsum',
        description: "Boost your project's manliness by 100% touts the Hairy Lipsum generator. Give your project the moustache it deserves with some “handsomely rugged” lorem ipsum."
      }
    ]
  },
  {
    name: 'Busey Ipsum',
    id: 'busey-ipsum',
    description: 'A Gary Busey themed lorem ipsum generator to fill your project with a never ending stream of “buseyisms,” quotes taken directly from the actor\'s extensive filmography.',
    resources: [
      {
        name: 'Cheese Ipsum',
        id: 'cheese-ipsum',
        description: "If you like your filler text creamy, melty or aged, than Cheese Ipsum is the site for you. Hit generate to get a taste of lorem ipsum at its cheesiest."
      },
      {
        name: 'Bluth Ipsum',
        id: 'Bluth-Ipsum',
        description: "If you're an Arrested Development fan than this lorem ipsum generator is for you. Make your project stand out with ramblings big and small from Michael Bluth."
      }
    ]
  },
  {
    name: 'Fillerama',
    id: 'fillerama',
    description: 'Everyone loves some esoteric TV based placeholder text. Generate lorem ipsum from popular TV shows like Futurama, Doctor Who, Dexter and more.',
    resources: [
      {
        name: 'Vatican Assasin',
        id: 'vatican-assasin',
        description: 'The gospel according to Charlie Sheen, the oft vulgar star of Two and a Half Men, Vatican Assassin is a lorem ipsum parody of his cosmic meltdown in 2011.'
      },
      {
        name: 'Postmodernist Generator',
        id: 'postmodernist-generator',
        description: 'Sound overtly academic with the Postmodernist Generator, which uses a grammar based random text generator to create artificial but believable lorem ipsum essays.'
      }
    ]
  }
]



function Resource ({match}){
  const topic = topics.find(({ id }) => id === match.params.topicId)
  .resources.find(({ id }) => id === match.params.subId)

  return(
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
     </div>
  )

}

function Topic({ match }){
  const topic = topics.find(({ id }) => id === match.params.topicId)
  return (
    <div className="main">
      <h2 className="text">{topic.name}</h2>
      <p className="text">{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr/>

      <Route path={`${match.path}/:subId`} component={Resource}/>
    </div>
  )
}

function Topics({ match }){
  return(
    <div className="main">
      <h1 className="center">Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr/>

      <Route path={`${match.path}/:topicId`} component={Topic} ></Route>

    </div>
  )
}

function Home(){
  return(
    <div>
      <h1 className="center">Home</h1>
      <p className="center">Go to topics to see the nested react router</p>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <p>Ilkkan Tuluce</p>
    <a href="https://github.com/ilkkantuluce" rel="noopener noreferrer" target="_blank">Github</a> 
    </div>
  )
}

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/topics" component={Topics}/>
        </div>
        <Footer/>
      </Router>
    )
  }
}

export default App;