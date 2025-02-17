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