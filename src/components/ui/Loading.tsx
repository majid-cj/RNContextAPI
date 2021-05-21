import React, {FC} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {loadingStyle} from './styles';
import {debounce} from '../../utils/utils';
import {useThemeContext} from '../../hooks';

interface Props {
  show: boolean;
}

const Loading: FC<Props> = ({show = false}) => {
  const [loading, setLoading] = React.useState(show);
  const onLoading = debounce(newLoading => {
    setLoading(newLoading);
  });

  const {theme} = useThemeContext();
  const {
    colors: {accent},
  } = theme;
  const {container, loadingContainer} = loadingStyle(theme);

  React.useEffect(() => {
    onLoading(show);
  }, [loading, show]);

  if (loading !== true) {
    return <React.Fragment />;
  }

  return (
    <Modal visible={loading} transparent animationType="fade">
      <View style={container}>
        <View style={loadingContainer}>
          <ActivityIndicator size={128} color={accent} />
        </View>
      </View>
    </Modal>
  );
};
export {Loading};
