import React from 'react';
import NavBar from './Navbar.js';
import Profils from './Profils.js';
import Comment from './Comment.js';

import mathieu from "../mathieu.jpg";
import antoine from "../antoine.jpg";
import clara from "../clara.jpg";

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          photo: mathieu,
          prenom: "Mathieu",
          nom: "Quiniou",
          date_naissance: "04/07/1997",
          Comment: "J'ai eu beaucoup de mal à faire ce tp ...",
        },
        {
          photo: antoine,
          prenom: "Antoine",
          nom: "Sorriaux",
          date_naissance: "01/4/1997",
          Comment: "Je confirme ce qu'a dit Mathieu",
        },
        {
          photo: clara,
          prenom: "Clara",
          nom: "Demarta",
          date_naissance: "01/01/1998",
          Comment: "Je bosse avec eux, c'est dés galériens...",
        }
      ],
      show_profile: 0,
      thumb_up : 0
    };
  }

  addThumbUp = () => {
    this.setState({thumb_up: this.state.thumb_up + 1})
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  render() {
    return(
        <body>
          <header>
            <nav className="navbar">
              <NavBar
                  prenom={this.state.profile[0].prenom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  prenom={this.state.profile[1].prenom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  prenom={this.state.profile[2].prenom}
                  onClick={() => this.handleClick(2)}/>
            </nav>
          </header>
          <div className="profile">
            <Profils
                photo={this.state.profile[this.state.show_profile].photo}
                prenom={this.state.profile[this.state.show_profile].prenom}
                nom={this.state.profile[this.state.show_profile].nom}
                date_naissance={this.state.profile[this.state.show_profile].date_naissance}
            />
            <Comment
                comment={this.state.profile[this.state.show_profile].Comment}
                nbThumb = {this.state.thumb_up}
                onClick = {this.addThumbUp}
              />
          </div>
        </body>
    );
  }
}

export default Container;
