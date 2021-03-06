import * as React from 'react';
import { Divider, Grid, Popup, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';

import { OnTextAreaChange } from '../../meta/types/Function';
import { Image } from '../../meta/types/Image';
import AlbumsList from '../AlbumsList';
import ClickableIcon from '../common/ClickableIcon';
import IconFormLabel from '../common/IconFormLabel';
import LocationSearchInput from '../common/LocationSearchInput';
import SaveButton from '../common/SaveButton';
import SimpleDatePicker from '../common/SimpleDatePicker';
import ImageHighlightDetailsHeader from './Header';

type Props = {
  setRenderInformation: any;
  image: Image;
  setLocation: any;
  saving: boolean;
  saveDetails: any;
  handleDescriptionChange: OnTextAreaChange;
  description: string;
  canTriggerFaceIdentifier: boolean;
  handleDateSelection: any;
};

const ImageHighlightDetails = ({
  setRenderInformation,
  setLocation,
  image,
  saving,
  saveDetails,
  handleDescriptionChange,
  description,
  canTriggerFaceIdentifier,
  handleDateSelection,
}: Props) => {
  return (
    <DetailsStyle className="ImageHighlightDetails">
      <Grid columns="equal">
        <ImageHighlightDetailsHeader setRenderInformation={setRenderInformation} />

        <Grid.Row style={{ paddingBottom: '0px' }}>
          <Grid.Column>
            <IconFormLabel label="Description" icon="info circle" />
            <TextArea
              style={{ marginTop: '8px' }}
              placeholder="Write something about this image..."
              autoHeight
              rows={2}
              value={description}
              onChange={handleDescriptionChange}
            />
            <Divider />
            <LocationSearchInput
              key={image.image_id}
              initialValue={image.location}
              setLocation={setLocation}
              label="Where was this photo taken at?"
            />
            <Divider />
            <SimpleDatePicker
              key={`${image.image_id}-SimpleDatePicker`}
              label="When was this photo taken?"
              initialValue={image.taken_on}
              handleDateSelection={handleDateSelection}
            />

            {image.albums &&
              image.albums.length > 0 && (
                <React.Fragment>
                  <Divider />
                  <AlbumsList albums={image.albums} />
                </React.Fragment>
              )}
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3} verticalAlign="middle">
            {canTriggerFaceIdentifier && (
              <Popup
                trigger={
                  <ClickableIcon name="search" onClick={() => saveDetails(true)} loading={saving} />
                }
                content="Recognize people in image"
              />
            )}
          </Grid.Column>
          <Grid.Column align="right" width={13}>
            <SaveButton loading={saving} onClick={() => saveDetails(false)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </DetailsStyle>
  );
};

const DetailsStyle = styled.div`
  background-color: white;
  overflow: hidden;
  width: 100%;
  height: 100%;

  textarea {
    width: 100%;
    font-size: 0.85rem;
  }

  .ui.grid {
    margin: 6px;
  }
`;

export default ImageHighlightDetails;
