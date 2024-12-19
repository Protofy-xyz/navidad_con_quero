import React, { useState } from "react";
import { Theme } from "@my/ui";
import { UIWrapLib, UIWrap } from "protolib/visualui/visualuiWrapper";
import { withSession } from "protolib/lib/Session";
import { Page } from "protolib/components/Page";
import { useEditor } from "protolib/visualui/useEdit";
import { API, Protofy } from "protobase";
import { SSR } from "protolib/lib/SSR";
import { useComposedState } from "protolib/lib/useComposedState";
import { Text } from "protolib/components/Text";
import { Center } from "protolib/components/Center";
import { DefaultLayout } from "../layout/DefaultLayout";
import { context } from "../bundles/uiContext";
import { useRouter } from "solito/navigation";
import { Objects } from "../bundles/objects";
import { ButtonSimple } from "protolib/components/ButtonSimple";
import { Spacer } from "protolib/components/Spacer";
import { HStack } from "protolib/components/HStack";

const isProtected = Protofy("protected", false);
Protofy("pageType", "blank");

const PageComponent = ({ currentView, setCurrentView, props }: any) => {
  const { cs, states } = useComposedState();

  const router = useRouter();
  context.onRender(async () => {});
  return (
    <Page height="99vh">
      <Center>
        <ButtonSimple onPress={(e) => context.fetch("/api/v1/automations/fordward")} width="120" height="120">
          Palante
        </ButtonSimple>
        <Spacer size="$8"></Spacer>
        <HStack>
          <ButtonSimple onPress={(e) => context.fetch("/api/v1/automations/left")} width="120" height="120">
            PA ALLA
          </ButtonSimple>
          <Spacer size="$8"></Spacer>
          <ButtonSimple onPress={(e) => context.fetch("/api/v1/automations/stop")} width="120" height="120">
            achooo
          </ButtonSimple>
          <Spacer size="$8"></Spacer>
          <ButtonSimple onPress={(e) => context.fetch("/api/v1/automations/right")} width="120" height="120">
            PA ACA
          </ButtonSimple>
        </HStack>
        <Spacer size="$8"></Spacer>
        <ButtonSimple onPress={(e) => context.fetch("/api/v1/automations/backward")} width="120" height="120">
          patras
        </ButtonSimple>
      </Center>
    </Page>
  );
};

const cw = UIWrapLib("@my/ui");

export default {
  route: Protofy("route", "/controller"),
  component: (props) => {
    const [currentView, setCurrentView] = useState("default");

    return useEditor(<PageComponent currentView={currentView} setCurrentView={setCurrentView} {...props} />, {
      path: "/packages/app/pages/controller.tsx",
      context: {
        currentView: currentView,
        setCurrentView: setCurrentView,
        Objects: Objects,
      },
      components: {
        ...UIWrap("DefaultLayout", DefaultLayout, "../../../layout/DefaultLayout"),
        ...cw("Theme", Theme),
      },
    });
  },
  getServerSideProps: SSR(async (context) => withSession(context, isProtected ? Protofy("permissions", []) : undefined)),
};
