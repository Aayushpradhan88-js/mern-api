import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {ChannelSubscriptionUI} from './ChannelSubscriptionUI';

export const VideoDetails = () => {
  const naviage = useNavigate();
  const location = useLocation();
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    if(!id) {
      setError("VIDEO ID IS MISSING FROM THE URL");
      setIsLoading(false);
      return;
    };

    const fetchVideoDetails = async() => {
      setIsLoading(true);

      const response = await fetch(`${}`)
    }
  })

  return (
    <div>
      
    </div>
  )
}