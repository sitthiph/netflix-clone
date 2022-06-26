import React from 'react';
import { Feature, OptForm } from '../components/component.export';
import { HeaderContainer } from '../containers/header.container';
import { JumbotronContainer } from '../containers/jumbotron.container';
import { FaqsContainer } from '../containers/faqs.container';
import { FooterContainer } from '../containers/footer.container';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};