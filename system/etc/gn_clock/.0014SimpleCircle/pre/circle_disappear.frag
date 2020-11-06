/**************************************************************************
 *
 * Copyright (c) 2014 MediaTek Inc. All Rights Reserved.
 * --------------------
 * This software is protected by copyright and the information contained
 * herein is confidential. The software may not be copied and the information
 * contained herein may not be used or disclosed except with the written
 * permission of MediaTek Inc.
 *
 ***************************************************************************/
/** \file
 * A fragment shader for testing texture layers
 *
 */

precision mediump float;

uniform float u_time;
uniform float u_min_r;
uniform float u_max_r;
uniform sampler2D u_texture;

varying vec2 v_pos;
vec2 pos;

const float twoPi = 6.2832;

void main()
{
  gl_FragColor = texture2D( u_texture, v_pos );
  pos.x = v_pos.x;
  pos.y = 1.0 - v_pos.y;
  pos = pos * 2.0 - 1.0;//将单位扩大,然后x和y都移动一个坐标
  float dist= length( pos );
  vec4 color;
  float angle = atan( -pos.x, -pos.y ) + 3.1416;
  color = (angle / twoPi < u_time / 60.0) ?
          gl_FragColor:vec4(0.0,0.0,0.0,0.0);
  if(dist>u_min_r && dist<u_max_r){

    gl_FragColor =color;
  } 
  /*
  else{
  	gl_FragColor = vec4(0.0,0.0,0.0,0.0);
  	float distmin =abs( length( pos ) - u_min_r );
  	float distmax =abs( length( pos ) - u_max_r );
  	if(distmin < 0.01)
  	{
    	color = smoothstep(0.01, 0.001, distmin) * color;    
    	gl_FragColor = color;
  	}
  	else if(distmax < 0.01){
  		color = smoothstep(0.01, 0.001, distmax) * color;    
    	gl_FragColor = color;
  	}

  }
  */
}