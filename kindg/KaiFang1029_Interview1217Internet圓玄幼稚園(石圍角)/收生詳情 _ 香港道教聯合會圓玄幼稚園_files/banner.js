jssor_sliderb_starter = function (containerId) {

        var _SlideshowTransitions = [ //淡入淡出

        {$Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }
       
        , { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }
        ];

        var options = {
            $AutoPlay: true,      
            $AutoPlaySteps: 1,    
            $AutoPlayInterval: 4000,   
            $PauseOnHover: 1,      
            $ArrowKeyNavigation: true,   		
            $SlideDuration: 500,            
            $MinDragOffsetToSlide: 20,              
            //$SlideWidth: 600,           
            //$SlideHeight: 300,           
            $SlideSpacing: 0, 		
            $DisplayPieces: 1,      
            $ParkingPosition: 0,   
            $UISearchMode: 1,  
            $PlayOrientation: 1,     
            $DragOrientation: 3,  

            $SlideshowOptions: {                               
                $Class: $JssorSlideshowRunner$,                 
                $Transitions: _SlideshowTransitions,           
                $TransitionsOrder: 1,                          
                $ShowLink: true                                   
            },

            $BulletNavigatorOptions: {                             
                $Class: $JssorBulletNavigator$,                     
                $ChanceToShow: 2,                             
                $Lanes: 1,                                   
                $SpacingX: 10,                                  
                $SpacingY: 10                                
            },

            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,             
                $ChanceToShow: 2,                             
                $AutoCenter: 2                           
            },

            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,              
                $ChanceToShow: 2,                             
                $ActionMode: 0,                                
                $DisableDrag: true                            
            }
        };

        var jssor_sliderb = new $JssorSlider$(containerId, options);
 };