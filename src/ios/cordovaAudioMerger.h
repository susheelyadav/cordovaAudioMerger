#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

@interface cordovaAudioMerger : CDVPlugin {}

- (void)mergeAudioFiles:(CDVInvokedUrlCommand *)command;

@end
