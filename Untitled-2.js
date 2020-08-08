
const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
const hasPermission = await PermissionsAndroid.check(permission);
if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {
  if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    return;
  }CameraRoll.save(data.uri)
       
      

    }