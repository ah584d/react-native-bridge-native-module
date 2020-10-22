package com.pocnativebridge.ui;
import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.widget.Button;
import android.view.View;

public class Switch extends Button {

	public Boolean isTurnedOn = false;

    public void setIsTurnedOn (Boolean switchStatus){
        isTurnedOn = switchStatus;
        changeColor();
	}

    public Switch(Context context) {
        super(context);
        this.setTextColor(Color.BLUE);
		this.setOnClickListener(new OnClickListener() {
            public void onClick(View v) {
                isTurnedOn = !isTurnedOn;
                changeColor();
            }
        });
		changeColor();
	}

	private void changeColor() {
        if (isTurnedOn) {
            setBackgroundColor(Color.YELLOW);
            setText("JAVA BUTTON - I am ON");
        } else {
            setBackgroundColor(Color.GRAY);
            setText("JAVA BUTTON - I am OFF");
        }
    }
	
	
    public Switch(Context context, AttributeSet attrs) {
        super(context, attrs);
    }
    public Switch(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }
}