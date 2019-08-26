doc = open('./doc.kml','r')
content = doc.read().split('<Point>')
for x in range(1, len(content) -1):
	content[x] = '<extrude>1</extrude>' + content[x]
result = '<Point>'.join(content)
dest = open('./doc.kml','w')
dest.write(result)
print('Output file')



doc = open('./doc.kml','r')
content = doc.read().split('<Point>')
for x in range(1, len(content) -1):
	content[x] = '<extrude>1</extrude>' + content[x]
result = '<LineString>'.join(content)
dest = open('./doc.kml','w')
dest.write(result)
print('Output file')
