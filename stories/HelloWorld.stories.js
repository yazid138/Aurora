import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../src/components/HelloWorld/index'

storiesOf('Hello World', module)
    .add('with name', () => (
        <HelloWorld name="danu"/>
    ));
