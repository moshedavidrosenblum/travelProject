# kaya camera manager

# ICamera

## Purpose
The purpose of the camera interface and its subclasses, is to provide simple and convenient interface in order to communicate, and acquire frames from camera <br/>
## Usage
The usage of the camera interface is very intuitive. Firstly initialize the camera class with a suitable configuration struct. <br/>
For instance DemoCameraConfig struct to intialize the kaya camera class. <br/>
Secondly, call the start function in order to start the frames acquisition from the camera int othe cyclic buffer (see information below).<br />
In the end, you can call the stop function in order to stop the frames acquisition (can start it again by calling to the start function), or call the exit function, that exit from the camera and from the frame grabber.<br/>
## Configuration Description

| Name             | Type    | Description                                                                                 | Default Value |
|------------------|---------|---------------------------------------------------------------------------------------------|---------------|
| cameraIndex      | integer | The index of the camera in the board which connected to the frame grabber                   | 1             |
| grabberIndex     | integer | The index of the grabber which connected (physically) to the computer board                 | 1             |
| framesPerStream  | integer | The number of frames which will be save in the internal camera buffer                       | 0             |
| framesToAcquired | integer | The number of frames to acquired                                                            | 500           |
| exposureTimeMs   | integer | The exposure time (in milliseconds) of the camera                                           | 20            |
| bufferSize       | integer | The buffer size of the cyclic buffer, which the frames are saved in (see information below) | 200           |
| frameType        | string  | The frame type which the frames will be                                                     | Mono8         |
| framesRate       | int     | The frame's acquisition rate, **This config is only for demo camera config**                | 20            |


# IBuffer

## Purpose
The purpose of the buffer interface and its subclasses, its to provide access to the cyclic frames buffer.<br/>

## Usage
The usage of the IBuffer class is pretty simple. In order get data from the buffer by its index, call to the getFrame method, with the index as a parameter.<br/>
Keep in mind that the buffer size is irrelevant for the method. <br/>
i.e if you call to this function with index of 3, and the buffer size is only 2, you will get the frame with index 1 (3 % 2).<br/>
If you would like to get the last frame inserted to the buffer, just call to the getLastFrame method.

