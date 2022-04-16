let koalaContainer = <div className="ui items"></div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    
    //koalaCard.style.cursor = 'pointer';
    koalaCard = <div className="item" style={{ cursor: 'pointer' }}></div>

    // Koala Card Image

    let imageContainer = <div className="image"></div>

    //let koalaImage = document.createElement('img')
    //koalaImage.setAttribute('src', koala.imageURL)
    //imageContainer.append(koalaImage)
    let koalaImage = imageContainer.append(<img src={koala.imageURL}></img>)


    // Koala Card Content
    //let koalaContent = document.createElement('div')
    //koalaContent.setAttribute('class', 'content')
    <div className="content"></div>

    //let header = document.createElement('div')
    //header.setAttribute('class', 'header')
    //header.append(koala.name)
    let header = <div className="header">{koala.name}</div>

    //let descriptionParagraph = document.createElement('p')
    //descriptionParagraph.append(koala.description)
    let descriptionParagraph = <p>{koala.description}</p> 

    //let descriptionContainer = document.createElement('div')
    //descriptionContainer.setAttribute('class', 'description')
    //descriptionContainer.append(descriptionParagraph)
    let descriptionContainer = <div className="description">{descriptionParagraph}</div>

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)