docName = input('doc name (insert extension!)')

doc = open(docName,'r')
content = doc.read().split('<Point>')
for x in range(1, len(content) -1):
	content[x] = '<altitudeMode>relativeToGround</altitudeMode>' + content[x]
result = '<Point>'.join(content)
dest = open(docName,'w')
dest.write(result)

doc = open(docName,'r')
content = doc.read().split('<Point>')
for x in range(1, len(content) -1):
	content[x] = '<extrude>1</extrude>' + content[x]
result = '<Point>'.join(content)
dest = open(docName,'w')
dest.write(result)

doc = open(docName,'r')
content = doc.read().split('<LineString>')
for x in range(1, len(content) -1):
	content[x] = '<altitudeMode>relativeToGround</altitudeMode>' + content[x]
result = '<LineString>'.join(content)
dest = open(docName,'w')
dest.write(result)

doc = open(docName,'r')
content = doc.read().split('<LineString>')
for x in range(1, len(content) -1):
	content[x] = '<extrude>1</extrude>' + content[x]
result = '<LineString>'.join(content)
dest = open(docName,'w')
dest.write(result)
print("Success!!!!")
