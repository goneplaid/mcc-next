import React from "react";
import Text from "./Text";
import SiteHeader from "../SiteHeader/SiteHeader";
import PageLayout from "../PageLayout/PageLayout";
import AsideLayout from "../AsideLayout/AsideLayout";
import Card from "../Card/Card";

const TextUsage = () => {
  const { Aside, Article } = AsideLayout;

  return (
    <>
      <SiteHeader>
        <Text.SubHead align="center" className="h-full flex-grow">
          MCC Tiny Design System
        </Text.SubHead>
      </SiteHeader>

      <PageLayout>
        <Text.Heading className="mb-16">
          Using <Text.Code>&lt;Text&gt;</Text.Code> &amp;{" "}
          <Text.Span inheritWeight>Typography</Text.Span>
        </Text.Heading>

        <AsideLayout gap="large">
          <Aside>
            <Card size="compact">
              <Text.P>
                This section goes over how to use the{" "}
                <Text.Code>&lt;Text&gt;</Text.Code> component and how it
                integrates with the projects&apos; typographic standards.
              </Text.P>
            </Card>
          </Aside>
          <Article>We landed on the moon!</Article>
        </AsideLayout>
      </PageLayout>
    </>
  );
};

export default TextUsage;

/* Do this, do this. Organize all layout-related components under a single
   namespace. It should provide a much better developer experience than having
   devs remember which components there are for layout purposes.
   
  ```
  <Layout.Page>
    <Layout.PageHeader>
      <Text.Heading>Here's me <Text.Code>H1</Text.Code></Text.Heading>
    </Layout.PageHeader>
    <Layout.Hero>OMG LOOK AT THIS - KEEP SCROLLING!</Layout.Hero>
    <Layout.AsideLayout>
      <Layout.Aside></Layout.Aside>
      <Layout.Main></Layout.Main>
    </Layout.AsideLayout>
  </Layout.Page>
  ```

OR, use components like this (I like better):

  ```
  { Page, PageHeader, Hero, AsideLayout, Aside, AMain } = Layout;

  <Page>
    <PageHeader>
      <Text.Heading>Here's me <Text.Code>H1</Text.Code></Text.Heading>
    </PageHeader>
    <Hero>OMG LOOK AT THIS - KEEP SCROLLING!</Hero>
    <AsideLayout>
      <Aside></Aside>
      <AMain></AMain>
    </AsideLayout>
  </Page>
  ```
*/
