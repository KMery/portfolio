import React from 'react';
const redes = [
    { red: "github", link: "https://github.com/KMery" },
    { red: "gmail", link: "mailto:kmeryleiva@gmail.com?Subject=He%20visto%20tu%20portfolio" },
    { red: "linkedin", link: "https://www.linkedin.com/in/mayraleiva/" },
    { red: "whatsapp", link: "https://wa.me/5403704284724" },
]

const projects = [
    { project: "pokedex", tech: 'angular', link: "https://romantic-pasteur-0306d9.netlify.app/" },
    { project: "weather-app", tech: 'nodejs', link: "https://clima-app-1.herokuapp.com/" },
    { project: "anotador", tech: 'javascript vanilla', link: "https://eloquent-mestorf-db7954.netlify.app/" },
]

class Icon extends React.Component{
    static context;
    constructor(props) {
        super(props);
        if (this.props.src === 'skill') {
            this.context = require.context('../components/skills/utils/images', false, /\.(png|jpe?g|svg)$/)
        } else if (this.props.src === 'project') {
            this.context = require.context('../components/projects/utils/images', false, /\.(png|jpe?g|svg)$/)
        } else if (this.props.src === 'contact') {
            this.context = require.context('../components/contact/utils/images', false, /\.(png|jpe?g|svg)$/)
        } 

        this.state = {
            class: `${this.props.src } ${this.props.className}`,
            listOfImages: this.importAll(this.context)
        }
    }

    importAll(r) {
        return r.keys().map(r);
    }

    contact() {
        // console.log('hello from contact');
        return this.state.listOfImages.map(
            (image, index) =>  {
                if (this.props.src === 'contact') {
                    return <a href={redes[index].link} key={index} title={redes[index].red} ><img src={image.default} alt={this.props.src} className={this.props.src+'-icon icon'} /></a>
                }  else if (this.props.src === 'project') {
                    return <a href={projects[index].link} key={index} title={projects[index].tech} ><img src={image.default} alt={this.props.src} className={this.props.src+'-icon icon'} /></a>
                }
                return <img key={index} src={image.default} alt={this.props.src} className={this.props.src+'-icon icon'} />
            }
        )
    }

    render() {
        return(
            <div className={this.state.class}>
                {
                    this.contact()
                }
            </div>
        )
    }
}

export default Icon;