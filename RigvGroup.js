import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function RigvGroup({navigation}) {  
    return (
      <Background>        
        <Header>Group</Header>
        <Paragraph>
          Your amazing app starts here. Open you favorite code editor and start
          editing this project.
        </Paragraph>
         
      </Background>
    )
  }
  