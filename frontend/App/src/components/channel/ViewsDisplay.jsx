import React,{useState, useEffect} from 'react';
import { ContentDetails } from './ContentDetails';
import { IncrementViews } from '../../services/ViewsService';

const ViewsDisplay = ({mediaId}) => {
  const [mediaItem, setMediaItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]= useState(null);
  
  useEffect(() =>{
    if(!mediaItem) {
      setIsLoading(false);
      setError("NO MEDIA ID IS PROVIDED");
      return;
    }

    let isMounted = true;

    const fetchAndIncrement = async() => {
        setIsLoading(true);
        setError(null);

        
    };
  })

  return (
    <div>
      
    </div>
  )
}

export default ViewsDisplay
