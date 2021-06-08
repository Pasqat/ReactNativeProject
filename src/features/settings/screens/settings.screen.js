import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.8);
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo ? (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            ) : (
              <Avatar.Image size={180} source={{ uri: photo }} />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            style={{ padding: 16 }}
            title="Payment"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon="cart"
              />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            style={{ padding: 16 }}
            title="Past Order"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon="history"
              />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            style={{ padding: 16 }}
            title="Logout"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon="door"
              />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
