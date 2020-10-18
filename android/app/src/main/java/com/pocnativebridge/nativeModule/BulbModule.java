package com.pocnativebridge.nativeModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class BulbModule extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;
    public BulbModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(Callback successCallback) {
        successCallback.invoke(null, isOn);
    }

    @ReactMethod // function is exposed to Javascript explicitly
    public void turnOn() {
        isOn = true;
        System.out.println("Bulb is turn ON");
    }
    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Bulb is turn OFF");
    }

/**
 The purpose of this method is to return the string name of the NativeModule which represents this class in JavaScript
 */
    @Override
    public String getName() {
        return "Bulb";
    }

}