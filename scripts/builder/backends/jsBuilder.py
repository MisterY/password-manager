# Builder for node.js JavaScript version.
#!/usr/bin/env python
# -*- coding: UTF-8 -*-

from scriptLanguageBuilder import ScriptLanguageBuilder

class JsBuilder(ScriptLanguageBuilder):
	
	def name(self):
		return "JS (node.js) builder"

	
	def relativePath(self):
		return 'js'
