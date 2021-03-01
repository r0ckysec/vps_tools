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

    retVal = payload.replace("and","or").replace("aNd","or").replace("And","or").replace("AND","or").replace("anD","or").replace("ANd","or").replace("AnD","or")

    return retVal
