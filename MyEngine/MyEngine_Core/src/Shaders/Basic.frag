#version 330 core

layout (location = 0) out vec4 color;

uniform vec4 colour;
uniform vec2 light_pos;

in DATA
{
	//Set the position and colour as Vector4's'
	vec4 pos;
	vec4 color;
} fs_in;

void main()
{
	//Light Source strength
	float intensity = 1.0 / length(fs_in.pos.xy - light_pos);
	// color = colour * intensity;
	color = fs_in.color * intensity;
}