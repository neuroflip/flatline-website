import * as React from 'react'
import Title from './Title'
import Card from './Card'

function Introduction() {
  return <div id="introduction">
    <Title><>INTRODUCTION</></Title>
    <Card extraClassName="p-6 mt-0">
        <p>Social and friendly person interested in web sites since the late 90’s. Passionate about innovation in all that I do.</p>
      </Card>
      <Card extraClassName="p-6 mt-0">
          <p className="mt-5">Working with modern web applications since 2002, helping several bcn tech startups (MedHouses, Cybex, Layers, <b>Marfeel</b>) building awsome products and working with international and multidisciplinary teams.</p>
    </Card>
  </div>
}

export default Introduction
