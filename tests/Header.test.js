import * as React from 'react'
import renderer from 'react-test-renderer'
import Header from '../src/components/Header'

it('HEADER does not changed in content', () => {
  const component = renderer.create(<Header></Header>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
