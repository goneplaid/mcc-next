import React from "react";
import Text from "./Text";
import SiteNav from "../SiteNav/SiteNav";
import PageLayout from "../PageLayout/PageLayout";
import AsideLayout from "../AsideLayout/AsideLayout";
import Card from "../Card/Card";
import clsx from "clsx";
import { fontTypeClasses, fontVariables } from "../../fonts";

const TextUsage = () => {
  const { Aside, Article } = AsideLayout;
  const { Heading, SubHead, P, Span, Code } = Text;

  const textComponentLabel = <Code>&lt;Text&gt;</Code>;

  return (
    <div className={clsx(fontVariables)}>
      <SiteNav>
        <SubHead align="center" className="h-full flex-grow">
          MCC Tiny Design System
        </SubHead>
      </SiteNav>

      <PageLayout>
        <Heading>
          Using {textComponentLabel} &amp; <Span branded>Typography</Span>
        </Heading>

        <AsideLayout gap="medium">
          <Aside>
            <Card borderColor="base200">
              <P>
                This section goes over how to use the {textComponentLabel}{" "}
                component and how it integrates with the projects&apos;
                typography system.
              </P>
            </Card>
          </Aside>
          <Article>
            <div className="flex flex-col gap-8">
              <section>
                <SubHead level={1} branded>
                  Introduction
                </SubHead>
                <P level={2}>
                  {textComponentLabel} is a React component that is built on top
                  of the typograpic conventions for this project which are
                  defined in its typographic configuration.
                </P>
                <P level={2}>
                  The typographic configuration for this project consists of a
                  set of types and utility classes that comprise the typography
                  system; it provides a finite set of typographic choices
                  available. This, by necessity, dictates the shape of the API
                  contract for the {textComponentLabel} component.
                </P>
              </section>

              <section>
                <SubHead level={1} branded>
                  Typography System
                </SubHead>
                <P level={2}>
                  The typography system is divided on three primary presentation
                  text-styles:
                </P>
                <ul
                  className={clsx(
                    "list-disc list-inside ml-4 mb-8",
                    fontTypeClasses.content
                  )}
                >
                  <li>Headings (Lato, bold)</li>
                  <li>Sub-headings (Lato, semibold)</li>
                  <li>Content (Raleway, normal)</li>
                </ul>

                <P level={2}>With an additional, special type:</P>
                <ul
                  className={clsx(
                    "list-disc list-inside ml-4 mb-8",
                    fontTypeClasses.content
                  )}
                >
                  <li>Branded</li>
                </ul>

                <Text.SubHead>Example:</Text.SubHead>

                <Card className="mb-8 ml-4">
                  <Heading level={3}>This is a heading</Heading>
                  <SubHead level={3}>With a sub-heading</SubHead>
                  <Span className="block mb-8">
                    Along with some additional content
                  </Span>
                  <Heading level={3} branded>
                    This is a &quot;branded&quot; heading
                  </Heading>
                  <SubHead level={3} branded>
                    With a &quot;branded&quot; sub-heading
                  </SubHead>
                  <Span level={3} branded>
                    Along with some additional &quot;branded&quot; content
                  </Span>
                </Card>
              </section>
            </div>
          </Article>
        </AsideLayout>
      </PageLayout>
    </div>
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
