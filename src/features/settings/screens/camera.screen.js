import React, { useRef, useState, useEffect } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef();

  const snap = async () => {
    console.log("whaaat");
    if (cameraRef && isCameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
      onCameraReady={() => setIsCameraReady(true)}
    >
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={snap}
      />
    </ProfileCamera>
  );
};
