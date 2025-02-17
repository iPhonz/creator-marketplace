import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Camera, Share2, DollarSign, Users, Star, Search, Heart, MessageCircle, ShoppingBag, ChevronUp, Reply, X } from 'lucide-react';

const CreatorMarketplace = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [showResponses, setShowResponses] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  
  const videoReviews = [
    {
      id: 1,
      creator: "Sarah Chen",
      productName: "EcoWear Sustainable Jacket",
      productLink: "#",
      likes: 1243,
      comments: 89,
      commission: "15%",
      description: "This jacket is amazing! Made from recycled materials and perfect for spring. #sustainable #fashion",
      placeholder: "https://picsum.photos/400/600",
      responses: [
        {
          id: 101,
          creator: "Alex Kim",
          description: "After seeing Sarah's review, I got this jacket too. Here's how it held up in rain! ☔️",
          likes: 456,
          comments: 23,
          placeholder: "https://picsum.photos/400/600?random=1"
        },
        {
          id: 102,
          creator: "Maya Patel",
          description: "Different color but same jacket - size comparison with the original review",
          likes: 289,
          comments: 15,
          placeholder: "https://picsum.photos/400/600?random=2"
        }
      ]
    },
    {
      id: 2,
      creator: "Marcus Rivera",
      productName: "TechGear Pro Wireless Earbuds",
      productLink: "#",
      likes: 2891,
      comments: 156,
      commission: "12%",
      description: "Best noise cancellation I've tested this year! Full review in comments. #tech #audio",
      placeholder: "https://picsum.photos/400/600?random=3",
      responses: [
        {
          id: 201,
          creator: "Tech Review Lab",
          description: "Did a decibel test to verify the noise cancellation claims",
          likes: 891,
          comments: 67,
          placeholder: "https://picsum.photos/400/600?random=4"
        }
      ]
    }
  ];

  const RecordingInterface = ({ onClose }) => (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <X className="w-6 h-6 text-white cursor-pointer" onClick={onClose} />
        <div className="text-white">Recording Response</div>
        <button className="bg-red-500 px-4 py-2 rounded-full text-white text-sm">
          Post
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white text-center">
          <Camera className="w-16 h-16 mx-auto mb-4" />
          <p>Tap to Start Recording</p>
        </div>
      </div>
      <div className="p-4 bg-black/50">
        <input
          type="text"
          placeholder="Add your review description..."
          className="w-full bg-white/10 text-white p-3 rounded-lg"
        />
      </div>
    </div>
  );

  const VideoFeed = () => (
    <div className="w-full max-w-md mx-auto h-screen overflow-y-scroll snap-y snap-mandatory">
      {videoReviews.map((video) => (
        <div key={video.id} className="relative h-screen w-full snap-start">
          <div className="absolute inset-0 bg-black">
            <img 
              src={video.placeholder} 
              alt="Video placeholder" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <div className="flex justify-between items-center">
              <span className="font-medium">{video.creator}</span>
              <button className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                Follow
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-3 rounded-lg">
                <h3 className="font-bold">{video.productName}</h3>
                <p className="text-sm opacity-90">{video.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-400 font-medium">{video.commission} commission</span>
                  <button className="ml-auto bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Shop Now
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="flex flex-col items-center">
                    <Heart className="w-6 h-6" />
                    <span className="text-xs">{video.likes}</span>
                  </button>
                  <button 
                    className="flex flex-col items-center"
                    onClick={() => setShowResponses(showResponses === video.id ? null : video.id)}
                  >
                    <Reply className="w-6 h-6" />
                    <span className="text-xs">{video.responses.length}</span>
                  </button>
                </div>
                <button className="flex flex-col items-center">
                  <Share2 className="w-6 h-6" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>
          </div>

          {showResponses === video.id && (
            <div className="absolute inset-0 bg-black/90 z-10">
              <div className="h-full flex flex-col">
                <div className="p-4 flex justify-between items-center text-white">
                  <h3 className="font-medium">Video Responses</h3>
                  <X className="w-6 h-6 cursor-pointer" onClick={() => setShowResponses(null)} />
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  {video.responses.map((response) => (
                    <div key={response.id} className="bg-white/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-white">{response.creator}</span>
                      </div>
                      <div className="aspect-[9/16] bg-black/50 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src={response.placeholder}
                          alt="Response video"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-white/80 text-sm">{response.description}</p>
                      <div className="flex gap-4 mt-2">
                        <span className="text-white/60 text-sm">{response.likes} likes</span>
                        <span className="text-white/60 text-sm">{response.comments} comments</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-white/20">
                  <button 
                    className="w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                    onClick={() => setIsRecording(true)}
                  >
                    <Camera className="w-5 h-5" />
                    Record Your Response
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {/* Navigation */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t z-40">
        <div className="flex justify-around p-4">
          <button 
            className={`flex flex-col items-center ${activeTab === 'feed' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('feed')}
          >
            <Camera className="w-6 h-6" />
            <span className="text-xs">Feed</span>
          </button>
          <button 
            className={`flex flex-col items-center ${activeTab === 'discover' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('discover')}
          >
            <Search className="w-6 h-6" />
            <span className="text-xs">Discover</span>
          </button>
          <button 
            className={`flex flex-col items-center ${activeTab === 'programs' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('programs')}
          >
            <DollarSign className="w-6 h-6" />
            <span className="text-xs">Programs</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20">
        {activeTab === 'feed' ? (
          <VideoFeed />
        ) : (
          <div className="max-w-6xl mx-auto p-4">
            <Card>
              <CardHeader>
                <CardTitle>{activeTab === 'discover' ? 'Discover Creators' : 'Creator Programs'}</CardTitle>
                <CardDescription>
                  {activeTab === 'discover' 
                    ? 'Find and follow creators in your niche'
                    : 'Join programs and earn commissions'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Coming soon...
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Recording Interface */}
      {isRecording && (
        <RecordingInterface onClose={() => setIsRecording(false)} />
      )}
    </div>
  );
};

export default CreatorMarketplace;