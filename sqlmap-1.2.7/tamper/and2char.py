#!/usr/bin/env python

"""
Copyright (c) 2006-2018 sqlmap developers (http://sqlmap.org/)
See the file 'LICENSE' for copying permission
"""

import re

from lib.core.enums import PRIORITY

__priority__ = PRIORITY.HIGHEST

def dependencies():
    pass

def tamper(payload, **kwargs):

    retVal = payload.replace("and","%26%26").replace("aNd","%26%26").replace("And","%26%26").replace("AND","%26%26").replace("anD","%26%26").replace("ANd","%26%26").replace("AnD","%26%26")

    return retVal
